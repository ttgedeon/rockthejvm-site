export default function Example(props) {
  return (
    <article className="bg-white">
      <div className="mx-auto max-w-7xl px-6 text-center lg:px-8">
        <div className="mx-auto max-w-2xl">
          {props.photo}
          <h3 className="mt-6 text-base font-semibold leading-7 tracking-tight text-gray-900">
            {props.name}
          </h3>
          {props.role && (
            <p className="text-sm leading-6 text-gray-600">{props.role}</p>
          )}
          {props.biography && (
            <p className="mt-4 text-lg leading-8 text-gray-600">
              {props.biography}
            </p>
          )}
        </div>
        <ul role="list" className="mt-6 flex justify-center gap-x-6">
          {props.socials.facebook && (
            <li>
              <a
                href={`https://www.facebook.com/${props.socials.facebook}`}
                className="text-gray-400 hover:text-gray-500"
              >
                <span className="sr-only">X</span>
                {props.facebook}
              </a>
            </li>
          )}
          {props.github && (
            <li>
              <a
                href={props.githubUrl}
                className="text-gray-400 hover:text-gray-500"
              >
                <span className="sr-only">X</span>
                {props.github}
              </a>
            </li>
          )}
          {props.linkedin && (
            <li>
              <a
                href={props.linkedinUrl}
                className="text-gray-400 hover:text-gray-500"
              >
                <span className="sr-only">X</span>
                {props.linkedin}
              </a>
            </li>
          )}
          {props.socials.twitter && (
            <li>
              <a
                href={props.twitterUrl}
                className="text-gray-400 hover:text-gray-500"
              >
                <span className="sr-only">X</span>
                {props.twitter}
              </a>
            </li>
          )}
          {props.youtube && (
            <li>
              <a
                href={props.youtubeUrl}
                className="text-gray-400 hover:text-gray-500"
              >
                <span className="sr-only">X</span>
                {props.youtube}
              </a>
            </li>
          )}
        </ul>
      </div>
    </article>
  );
}
