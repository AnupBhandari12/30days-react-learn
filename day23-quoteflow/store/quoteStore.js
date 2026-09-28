import { create } from "zustand";
import { persist } from "zustand/middleware";

export const useQuoteStore = create(
    persist(
        (set) => ({
            items: [],

            addItem: (service) =>
                set((state) => {
                    const existingItem = state.items.find(
                        (item) => item.id === service.id
                    );
                    if (existingItem) {
                        return {
                            items: state.items.map((item) =>
                                item.id === service.id
                                    ? {
                                        ...item,
                                        quality: item.quality + 1,
                                    }
                                    : item
                            ),
                        };
                    }

                    return {
                        items: [
                            ...state.items,
                            {
                                ...service,
                                quality: 1,
                            }
                        ]
                    }
                }),

            removeItem: (id) =>
                set((state) => ({
                    items: state.items.filter(
                        (item) => item.id !== id
                    ),
                })),

            clearquote: () =>
                set({
                    items: [],
                }),
        }),
        {
            name: "quoteflow-storage",
        }
    )
)