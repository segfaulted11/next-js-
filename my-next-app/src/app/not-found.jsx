import Link from 'next/link';

function NotFound() {
  return (
<div className="hero min-h-screen bg-base-200">
  <div className="hero-content text-center">
    <div className="max-w-md">
      <h1 className="text-9xl font-extrabold text-primary">404</h1>
      <h2 className="text-3xl font-bold mt-4">Page Not Found</h2>
      <p className="py-6 text-base-content/70">
        Sorry, we couldn't find the page you're looking for. It may have been moved or deleted.
      </p>
      <div className="flex justify-center gap-3">
        <Link href="/" className="btn btn-primary">Go Back Home</Link>
      </div>
    </div>
  </div>
</div>

  )
}

export default NotFound;