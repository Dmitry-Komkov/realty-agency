import React from 'react';
import tw from 'twin.macro';
import InNumbers from "./InNumbers";
import {nanoid} from "nanoid";
import Section from "../elements/Section";
import Container from "../elements/Container";

const stats = [
  {
    id: nanoid(),
    num: '12 лет',
    desc: 'на рынке',
    desc2: 'С 2010 года помогаем нашим клиентам находить, продавать и сдавать недвижимость по лучшей цене'
  },
  {
    id: nanoid(),
    num: '> 300',
    desc: 'довольных клиентов',
    desc2: 'Наши специалисты берут на себя заботу о комфорте клиентов, решая задачи грамотно и в короткие сроки\n'
  },
  {
    id: nanoid(),
    num: '> 20',
    desc: 'профессионалов в штате',
    desc2: 'Предоставляем комплексное риэлторское, брокерское, юридическое сопровождение\n'
  },
  {
    id: nanoid(),
    num: '> 50',
    desc: 'закрытых сделок в месяц',
    desc2: 'Многолетний опыт работы и профессионализм обеспечивает эффективное решение любого вопроса с недвижимостью\n'
  },
]

const Statistics = () => {
  return (
    <Section>
      <Container>
        <div tw="mt-12 lg:mt-20">
          <InNumbers stats={stats} />
        </div>
      </Container>
    </Section>
  );
}

export default Statistics;
