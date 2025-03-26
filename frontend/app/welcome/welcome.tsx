import cer1 from "~/assets/images/ceramics1.png";
import cer2 from "~/assets/images/ceramics2.png";
import cer3 from "~/assets/images/ceramics3.png";
import cer4 from "~/assets/images/ceramics4.png";
import cer5 from "~/assets/images/ceramics5.png";
import { Card } from "~/components/Card";

export function Welcome() {
  const images = [
    { src: cer1, title: "Vases", text: "lorem ipsum dolor sit amet" },
    { src: cer2, title: "Vase", text: "lorem ipsum dolor sit amet" },
    { src: cer3, title: "Plate", text: "lorem ipsum dolor sit amet" },
    { src: cer4, title: "Vase", text: "lorem ipsum dolor sit amet" },
    { src: cer5, title: "Vase", text: "lorem ipsum dolor sit amet" },
  ];

  return (
    <main className="flex flex-wrap items-center mx-auto justify-start pt-16 pb-4 gap-4">
      {images.map((image, index) => (
        <Card
          key={index}
          title={image.title}
          text={image.text}
          image={image.src}
        />
      ))}
    </main>
  );
}
