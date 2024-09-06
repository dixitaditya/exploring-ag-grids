import React, { useEffect, useRef, useState } from 'react';
import { TFolderContext } from "./context.type";
import initialData from "./folder.json";

/**
 * Context for managing folder data and operations.
 */
const FolderDataContext = React.createContext({} as TFolderContext);
FolderDataContext.displayName = 'FolderDataContext';

/**
 * Provider component for FolderDataContext.
 * 
 * @param props - The props for the provider component, including children elements.
 */
type FolderDataProviderProps = {
  children: React.ReactNode;
};

const FolderDataProvider: React.FC<FolderDataProviderProps> = ({ children }) => {
  const [folderData, setFolderData] = useState(initialData);

  const toggleItemSelection = (itemId: string) => {
    const updateItems = (items) => {
      return items.map((item) => {
        if (item.id === itemId) {
          const newSelection = !item.selected;
          if (item.type === "folder") {
            const updateChildItems = (children) =>
              children.map((child) => ({
                ...child,
                selected: newSelection,
                ...(child.type === "folder" && {
                  children: updateChildItems(child.children),
                }),
              }));
            return {
              ...item,
              selected: newSelection,
              children: updateChildItems(item.children),
            };
          }
          return { ...item, selected: newSelection };
        }

        if (item.type === "folder" && item.children) {
          const updatedChildren = updateItems(item.children);
          const allChildrenSelected = updatedChildren.every(
            (child) => child.selected
          );
          return {
            ...item,
            selected: allChildrenSelected,
            children: updatedChildren,
          };
        }

        return item;
      });
    };

    setFolderData((prevData) => updateItems(prevData));
  };

  const fetchSelectedItems = () => {
    const gatherSelected = (items) => {
      return items.reduce((result, item) => {
        if (item.selected) {
          result.push({ id: item.id, name: item.name, type: item.type });
        }
        if (item.children) {
          result = result.concat(gatherSelected(item.children));
        }
        return result;
      }, []);
    };

    return gatherSelected(folderData);
  };

  const handleSubmit = () => {
    const selectedItems = fetchSelectedItems();
    console.log("Selected Items:", selectedItems);
    // Send selectedItems to the backend
  };
  

  const contextValue: TFolderContext = {
    data: folderData,
    setData: setFolderData,
    toggleSelect:toggleItemSelection,
    fetchSelectedItems,
    handleSubmit,
  };

  return (
    <FolderDataContext.Provider value={contextValue}>
      {children}
    </FolderDataContext.Provider>
  );
};

/**
 * Hook to access folder data context.
 * 
 * @returns The context value.
 * @throws Will throw an error if used outside of a FolderDataProvider.
 */
const useFolderDataContext = (): TFolderContext => {
  const context = React.useContext(FolderDataContext);
  if (context === undefined) {
    throw new Error(
      'useFolderDataContext must be used within a <FolderDataProvider />',
    );
  }

  return context;
};

export { FolderDataProvider, useFolderDataContext };
