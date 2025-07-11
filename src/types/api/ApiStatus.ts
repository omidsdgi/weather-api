type ApiStatus= 'pending'|'isLoading'|'hasError'|'isSuccess'
export default ApiStatus

interface Props {
    status: 'pending' | 'isLoading' | 'hasError' | 'isSuccess'
}