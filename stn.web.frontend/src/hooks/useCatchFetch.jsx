
export const useCatchFetch = () => {
    const SendFetch = (promise, terminateLoading = false) => {
        promise.catch(GeneralCatch);
        if (!terminateLoading) {
            promise.finally(GeneralFinally);
        }
        return promise;
    }
    const GeneralCatch = (error) => {
        console.error('Error:', error);
        // TODO: Implementar un mensaje de 
        //error con un ojeto en el estado para que muestre un poput
    }

    const GeneralFinally = () => {
        console.log('Finally');
        // TODO: Implementar un estado para detener el loading
    }

    const setLoading = () => {
        console.log('Loading');
        // TODO: Implementar un estado para mostrar el loading
    }

    return {
        SendFetch,
        GeneralCatch,
        GeneralFinally,
        setLoading
    }
}