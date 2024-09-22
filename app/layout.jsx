import "@styles/globals.css";

export const metadata = {
  title: "AIprompt",
  description:
    "AIprompt is a platform that helps you to generate content ideas for your blog, social media, and more. It uses AI to generate content ideas based on your input.",
};
const RootLayout = ({ children }) => {
  return (
    <html>
      <body>
        <div className="main">
          <div className="gradient" />
        </div>
        <main className="app">{children}</main>
      </body>
    </html>
  );
};

export default RootLayout;
