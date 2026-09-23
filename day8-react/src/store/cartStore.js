import { create } from "zustand"

const useCartStore = create((set) => ({
    items: [],

    addItem: (product) =>
        set((state) => {
            const existingItem = state.items.find((item) => item.id === product.id);

            if (existingItem) {
                return {
                    items: state.items.map((item) =>
                        item.id === product.id
                            ? { ...item, quality: item.quality + 1 }
                            : item
                    )
                }
            }

            return{
                items:[
                    ...state.items,
                    {
                        ...product , quality : 1,
                    }
                ],
            };
        }),

    removeItem: (id) =>
        set((state) => ({
            items: state.items.filter((item) => item.id !== id),
        })),

    clearCart: () =>
        set({
            items: [],
        }),
}));

export default useCartStore;