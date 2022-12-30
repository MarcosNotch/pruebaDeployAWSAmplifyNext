import Navigation from "./components/Navigation/Navigation"

export default function RootLayout({ children }) {
  return (
    <html>
      <head></head>
      <body>
        <Navigation />
        {children}
      </body>
    </html>
  )
}
