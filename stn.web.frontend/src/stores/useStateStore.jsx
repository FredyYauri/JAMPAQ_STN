import { create } from 'zustand'

export const useStnStore = create((set) => ({
    modalConfirm: {
        isOpen: false,
        title: '',
        body: '',
        labelClose: 'Cerrar',
        onCancel: () => { }
    },
    setModalConfirm: (modal) => set(state => ({ modalConfirm: { ...state.modalConfirm, ...modal } })),
    closeModalAndReset: () => set(() => ({
        modalConfirm: {
            isOpen: false,
            title: '',
            body: '',
            labelClose: 'Cerrar',
            onCancel: () => { }
        }
    })),

    // State para auth
    token: sessionStorage.getItem('token') || null, // Cargar el token inicial del sessionStorage
    setToken: (newToken) => {
        if (newToken) {
            sessionStorage.setItem('token', newToken); // Guardar el nuevo token en sessionStorage
        } else {
            sessionStorage.removeItem('token'); // Eliminar el token si se pasa null o undefined
        }
        set({ token: newToken });
    },
    
    //loadding
    loading: false,
    setLoading: (load) => set(state => ({ loading: load })),
}))