interface UseRequestOptions<TData, TVariables, TError> {
    requestFn: (variables: TVariables) => Promise<TData>;
    error?: TError
}

interface ExecuteOptions<TData, TError> {
  onSuccess?: (data: TData) => void;
  onError?: (error: TError) => void;
}

const useRequest = <
TData = unknown, 
TVariables = unknown, 
TError = unknown
>({ requestFn }: UseRequestOptions<TData, TVariables, TError>) => {
  const isPending = ref(false);
  const error = ref<null|TError>(null);

  const execute = async (requestData: TVariables, { onSuccess, onError }: ExecuteOptions<TData, TError> = { }) => {
    isPending.value = true;
    try {
      const data = await requestFn(requestData);
      onSuccess?.(data);
      
    } catch (err) {
      error.value = err;
      onError?.(err as TError);
      
    } finally {
      isPending.value = false;
    }
  };

  return { isPending, execute, error };
}

export default useRequest;