import site from "@/data/site.json";
import Cookies from "js-cookie";

const clearCookies = () => {
  Cookies.remove("cookies-accepted");
  Cookies.remove("teachable-affiliate");
  window.location.reload();
};

const navigation = {
  content: [
    { name: "Articles", href: "/articles/1" },
    { name: "Courses", href: "/courses" },
    { name: "Videos", href: site.socials.youtube.url },
  ],
  support: [
    { name: "Contact", href: "/contact" },
    { name: "Memberships", href: "/memberships" },
  ],
  company: [
    { name: "About", href: "/about" },
    // { name: "News", href: "/news" },
  ],
  policies: [
    { name: "Cookie", href: "/policies/cookie" },
    { name: "Privacy", href: "/policies/privacy" },
    { name: "Refund", href: "/policies/refund" },
    { name: "Terms", href: "/policies/terms" },
    { name: "Trademark", href: "/policies/trademark" },
  ],
  // social: [
  //   {
  //     name: "Facebook",
  //     href: site.socials.facebook.url,
  //     icon: (props) => (
  //       <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
  //         <path
  //           fillRule="evenodd"
  //           d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
  //           clipRule="evenodd"
  //         />
  //       </svg>
  //     ),
  //   },
  //   {
  //     name: "GitHub",
  //     href: site.socials.github.url,
  //     icon: (props) => (
  //       <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
  //         <path
  //           fillRule="evenodd"
  //           d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
  //           clipRule="evenodd"
  //         />
  //       </svg>
  //     ),
  //   },
  //   {
  //     name: "Linkedin",
  //     href: site.socials.linkedin.url,
  //     icon: (props) => (
  //       <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
  //         <path d="M22.23 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.46c.98 0 1.77-.77 1.77-1.72V1.72C24 .77 23.21 0 22.23 0zM7.12 20.45H3.56V9h3.56v11.45zM5.34 7.58c-1.14 0-2.06-.92-2.06-2.06 0-1.14.92-2.06 2.06-2.06s2.06.92 2.06 2.06c0 1.14-.92 2.06-2.06 2.06zM20.45 20.45h-3.56v-5.6c0-1.34-.03-3.06-1.86-3.06-1.86 0-2.15 1.45-2.15 2.95v5.71h-3.56V9h3.42v1.56h.05c.48-.91 1.65-1.86 3.4-1.86 3.63 0 4.3 2.39 4.3 5.5v6.25z" />
  //       </svg>
  //     ),
  //   },
  //   {
  //     name: "X",
  //     href: site.socials.twitter.url,
  //     icon: (props) => (
  //       <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
  //         <path d="M13.6823 10.6218L20.2391 3H18.6854L12.9921 9.61788L8.44486 3H3.2002L10.0765 13.0074L3.2002 21H4.75404L10.7663 14.0113L15.5685 21H20.8131L13.6819 10.6218H13.6823ZM11.5541 13.0956L10.8574 12.0991L5.31391 4.16971H7.70053L12.1742 10.5689L12.8709 11.5655L18.6861 19.8835H16.2995L11.5541 13.096V13.0956Z" />
  //       </svg>
  //     ),
  //   },
  //   {
  //     name: "YouTube",
  //     href: site.socials.youtube.url,
  //     icon: (props) => (
  //       <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
  //         <path
  //           fillRule="evenodd"
  //           d="M19.812 5.418c.861.23 1.538.907 1.768 1.768C21.998 8.746 22 12 22 12s0 3.255-.418 4.814a2.504 2.504 0 0 1-1.768 1.768c-1.56.419-7.814.419-7.814.419s-6.255 0-7.814-.419a2.505 2.505 0 0 1-1.768-1.768C2 15.255 2 12 2 12s0-3.255.417-4.814a2.507 2.507 0 0 1 1.768-1.768C5.744 5 11.998 5 11.998 5s6.255 0 7.814.418ZM15.194 12 10 15V9l5.194 3Z"
  //           clipRule="evenodd"
  //         />
  //       </svg>
  //     ),
  //   },
  //   {
  //     name: "RSS",
  //     href: {site.socials.feed.url},
  //     icon: (props) => (
  //       <svg
  //         fill="none"
  //         viewBox="0 0 24 24"
  //         strokeWidth="1.5"
  //         stroke="currentColor"
  //         className="size-6"
  //         {...props}
  //       >
  //         <path
  //           strokeLinecap="round"
  //           strokeLinejoin="round"
  //           d="M12.75 19.5v-.75a7.5 7.5 0 0 0-7.5-7.5H4.5m0-6.75h.75c7.87 0 14.25 6.38 14.25 14.25v.75M6 18.75a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
  //         />
  //       </svg>
  //     ),
  //   },
  // ],
};

export default function Example(props) {
  return (
    <footer
      aria-labelledby="footer-heading"
      className="bg-black/5 shadow-slate-300"
    >
      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>
      <div className="mx-auto max-w-7xl px-6 pb-8 pt-20 sm:pt-24 lg:px-8 lg:pt-32">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          <div className="grid grid-cols-2 gap-8 xl:col-span-2">
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3
                  className={`text-sm font-semibold leading-6 ${props.holiday ? "text-holiday-content-1" : "text-content"}`}
                >
                  Content
                </h3>
                <ul className="mt-6 space-y-4">
                  {navigation.content.map((item) => (
                    <li key={item.name}>
                      <a href={item.href} className="text-sm leading-6">
                        <span
                          className={`${props.holiday ? "text-holiday-content-1 hover:text-holiday-accent-2" : "text-content hover:text-accent-2"}`}
                        >
                          {item.name}
                        </span>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-10 md:mt-0">
                <h3
                  className={`text-sm font-semibold leading-6 ${props.holiday ? "text-holiday-content-1" : "text-content"}`}
                >
                  Support
                </h3>
                <ul className="mt-6 space-y-4">
                  {navigation.support.map((item) => (
                    <li key={item.name}>
                      <a
                        href={item.href}
                        className="text-sm leading-6 text-content hover:text-accent-1"
                      >
                        <span
                          className={`${props.holiday ? "text-holiday-content-1 hover:text-holiday-accent-2" : "text-content hover:text-accent-2"}`}
                        >
                          {item.name}
                        </span>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3
                  className={`text-sm font-semibold leading-6 ${props.holiday ? "text-holiday-content-1" : "text-content"}`}
                >
                  Company
                </h3>
                <ul className="mt-6 space-y-4">
                  {navigation.company.map((item) => (
                    <li key={item.name}>
                      <a
                        href={item.href}
                        className="text-sm leading-6 hover:text-accent-1"
                      >
                        <span
                          className={`${props.holiday ? "text-holiday-content-1 hover:text-holiday-accent-2" : "text-content hover:text-accent-2"}`}
                        >
                          {item.name}
                        </span>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-10 md:mt-0">
                <h3
                  className={`text-sm font-semibold leading-6 ${props.holiday ? "text-holiday-content-1" : "text-content"}`}
                >
                  Policies
                </h3>
                <ul className="mt-6 space-y-4">
                  {navigation.policies.map((item) => (
                    <li key={item.name}>
                      <a
                        href={item.href}
                        className="text-sm leading-6 hover:text-accent-1"
                      >
                        <span
                          className={`${props.holiday ? "text-holiday-content-1 hover:text-holiday-accent-2" : "text-content hover:text-accent-2"}`}
                        >
                          {item.name}
                        </span>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          <div className="mt-10 xl:mt-0">{props.newsletter}</div>
        </div>
        <div className="mt-16 border-t border-gray-900/10 pt-8 sm:mt-20 md:flex md:items-center md:justify-between lg:mt-24">
          <ul className="flex space-x-6 md:order-2">
            <li>
              <button type="button" onClick={clearCookies}>
                Clear Cookies
              </button>
            </li>
            <li>
              <a
                key="Facebook"
                href={site.socials.facebook.url}
                target="_blank"
                rel="noreferrer"
                className="text-content hover:text-accent-1"
              >
                {props.facebook}
              </a>
            </li>
            <li>
              <a
                key="GitHub"
                href={site.socials.github.url}
                target="_blank"
                rel="noreferrer"
                className="text-content hover:text-accent-1"
              >
                {props.github}
              </a>
            </li>
            <li>
              <a
                key="LinkedIn"
                href={site.socials.linkedin.url}
                target="_blank"
                rel="noreferrer"
                className="text-content hover:text-accent-1"
              >
                {props.linkedin}
              </a>
            </li>
            <li>
              <a
                key="Twitter"
                href={site.socials.twitter.url}
                target="_blank"
                rel="noreferrer"
                className="text-content hover:text-accent-1"
              >
                {props.twitter}
              </a>
            </li>
            <li>
              <a
                key="YouTube"
                href={site.socials.youtube.url}
                target="_blank"
                rel="noreferrer"
                className="text-content hover:text-accent-1"
              >
                {props.youtube}
              </a>
            </li>
            <li>
              <a
                key="RSS"
                href={site.socials.feed.url}
                target="_blank"
                className="text-content hover:text-accent-1"
                rel="noreferrer"
              >
                {props.rss}
              </a>
            </li>
          </ul>
          <p className="mt-8 text-sm leading-5 text-content md:order-1 md:mt-0">
            <small>
              &copy; {site.founded}&ndash;{new Date().getFullYear()}{" "}
              {site.legalName}
            </small>
          </p>
        </div>
      </div>
    </footer>
  );
}
