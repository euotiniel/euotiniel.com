import socialData from "../data/social-div";

export default function Social() {
  return (
    <ul className="flex flex-row gap-4">
      {socialData.map((data) => (
        <li key={data.id}>
          <a
            href={data.link}
            className="flex items-center  border-b transition-all text-gray-500 duration-500 hover:border-gray-500"
          >
            <p>{data.icon}</p>
            <span className="ml-1">{data.name}</span>
          </a>
        </li>
      ))}
    </ul>
  );
}
