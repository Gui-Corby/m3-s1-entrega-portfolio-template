import { TechnologiesList } from "./TechList";

export const TechSection = () => {
  return (
    <section className="technologies-section">
      <div className="container">
        <h2 className="title md">Tecnologias</h2>
        <TechnologiesList />
      </div>
    </section>
  );
};
