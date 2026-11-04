import { Component, type ErrorInfo, type ReactNode } from "react";

interface ErrorBoundaryProps {
  children: ReactNode;
}

interface ErrorBoundaryState {
  hasError: boolean;
}

// Menangkap error yang terjadi saat komponen di dalamnya ditampilkan,
// sehingga yang muncul pesan cadangan, bukan layar putih untuk seluruh aplikasi.
// Error Boundary di React harus berupa class component.
export default class ErrorBoundary extends Component<
  ErrorBoundaryProps,
  ErrorBoundaryState
> {
  state: ErrorBoundaryState = { hasError: false };

  static getDerivedStateFromError(): ErrorBoundaryState {
    return { hasError: true };
  }

  componentDidCatch(error: Error, info: ErrorInfo) {
    // Di proyek nyata, error ini bisa dikirim ke layanan monitoring
    console.error("Something went wrong while rendering:", error, info);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div
          role="alert"
          className="mx-auto flex max-w-[1440px] flex-col items-start gap-4 px-4 py-24 md:px-8 lg:px-24"
        >
          <h1 className="text-3xl font-bold">Something went wrong.</h1>
          <p className="text-muted">
            This part of the page couldn't be displayed. Try reloading the page.
          </p>
          <button
            type="button"
            onClick={() => window.location.reload()}
            className="bg-g-blue hover:bg-primary rounded-lg px-6 py-3 font-medium text-white"
          >
            Reload page
          </button>
        </div>
      );
    }

    return this.props.children;
  }
}
