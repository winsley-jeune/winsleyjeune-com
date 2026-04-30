export default function BlogLayout({
  children,
}: {
  children: React.ReactNode
}){
    return <div>
        <h1>See me?</h1>
        <section>{children}</section>
        

    </div>
}