import * as Dialog from "@radix-ui/react-dialog"
import { X } from "lucide-react"

interface LightboxProps {
  src: string | null
  alt?: string
  onClose: () => void
}

export function Lightbox({ src, alt = "", onClose }: LightboxProps) {
  return (
    <Dialog.Root open={src !== null} onOpenChange={(open) => !open && onClose()}>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 z-50 bg-black/90 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0" />
        <Dialog.Content className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8">
          <Dialog.Close
            className="absolute top-4 right-4 z-10 rounded-full bg-black/50 p-2 text-white/80 transition-colors hover:bg-black/70 hover:text-white focus:outline-none focus:ring-2 focus:ring-white/20"
            aria-label="Close"
          >
            <X className="h-6 w-6" />
          </Dialog.Close>
          {src && (
            <img
              src={src}
              alt={alt}
              className="max-h-[90vh] max-w-[90vw] rounded-lg object-contain"
              onClick={(e) => e.stopPropagation()}
            />
          )}
          <Dialog.Close className="absolute inset-0 -z-10" aria-label="Close" />
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  )
}
