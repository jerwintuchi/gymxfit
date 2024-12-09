const AuthLayout = ({ children }: {
    children: React.ReactNode
}) => {
    return (
        <div className="flex min-h-screen items-center justify-center bg-black">
            {children}
        </div>
    )
}

export default AuthLayout;
