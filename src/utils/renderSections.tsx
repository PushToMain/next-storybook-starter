import Hero from "@/components/ui/Hero";

type Section = {
  collection: string;
  id: string;
};

export const RenderSections = (section: Section) => {
  switch (section.collection) {
    case "block_hero":
      // @ts-expect-error: No type for item
      return <Hero {...section} key={section.id} item={section.item} />;
  }
};
