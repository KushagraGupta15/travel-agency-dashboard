import { ButtonComponent } from "@syncfusion/ej2-react-buttons";
import { cn } from "lib/utils";
import { Link, useLocation } from "react-router";

interface Props {
  title: string;
  description: string;
  ctsText?: string;
  ctaUrl?: string;
}

const Header = ({ title, description, ctsText, ctaUrl }: Props) => {
  const location = useLocation();
  return (
    <div>
      <header className="header">
        <article>
          <h1
            className={cn(
              "text-dark-100",
              location.pathname === "/"
                ? "text-2xl md:text-4xl font-bold"
                : "text-xl md:text-2xl font-semibold"
            )}
          >
            {title}
          </h1>
          <p
            className={cn(
              "text-gray-100 font-normal",
              location.pathname === "/"
                ? "text-base md:text-lg"
                : "text-sm md:text-lg"
            )}
          >
            {description}
          </p>
        </article>

        {ctaUrl && ctsText && (
          <Link
            to={ctaUrl}
            className="bg-primary-100 text-white px-4 py-2 rounded-md hover:bg-primary-200 transition-colors"
          >
            <ButtonComponent
              type="button"
              className="button-class !h-11 !w-full md:w-[240px]"
            >
              <img src="/assets/icons/plus.svg" alt="plus" className="size-5" />
            </ButtonComponent>
            <span className="p-16-semibold text-white">{ctsText}</span>
          </Link>
        )}
      </header>
    </div>
  );
};

export default Header;
