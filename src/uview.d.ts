declare module 'uview-plus' {
  interface ToastOptions {
    message: string
    duration?: number
  }

  interface ToastRef {
    show: (options: ToastOptions) => void
  }
}
