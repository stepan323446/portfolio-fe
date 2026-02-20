interface UseRequestOptions<T> {
    requestFn: () => Promise<T>;
}
interface ExecuteOptions<T, ErrorType> {
  onSuccess?: (data: T) => void;
  onError?: (error: ErrorType) => void;
}

const useRequest = <T, ErrorType = unknown>({ requestFn }: UseRequestOptions<T>) => {
  const isPending = ref(false);

  const execute = async ({ onSuccess, onError }: ExecuteOptions<T, ErrorType>) => {
    isPending.value = true;
    try {
      const data = await requestFn();
      onSuccess?.(data);
      
    } catch (error) {
      onError?.(error as ErrorType);
      
    } finally {
      isPending.value = false;

    }
  };

  return { isPending, execute };
}

export default useRequest;