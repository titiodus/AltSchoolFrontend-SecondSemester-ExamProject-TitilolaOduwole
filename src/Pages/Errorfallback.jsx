export default function ErrorFallback({error, resetErrorBoundary}) {
    return (
        <>
        
        <h1 className='err-text'>Oops! An error occured</h1>
        <pre>{error.message}</pre>
        <button onClick={resetErrorBoundary}>RESET</button>  
        </>
    );
}