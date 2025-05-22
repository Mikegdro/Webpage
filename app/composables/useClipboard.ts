export function useClipboard(text: string) {
    const toast = useToast()

    navigator.clipboard.writeText(text).then(() => {
        toast.add({ title: "Copied to clipboard" })
    });
}