import { FacebookIcon, GoogleIcon } from "../svgs";

const providers = [
  { name: "Facebook", icon: FacebookIcon },
  { name: "Google", icon: GoogleIcon },
];

const SocialLogins = () => {
  return (
    <div className="flex justify-center gap-4">
      {providers.map(({ name, icon: Icon }) => (
        <button
          key={name}
          type="button"
          aria-label={`Continue with ${name}`}
          className="flex size-14 items-center justify-center rounded-xl border border-shuttle-gray-100 transition-colors hover:border-persian-blue"
        >
          <Icon />
        </button>
      ))}
    </div>
  );
};

export default SocialLogins;
