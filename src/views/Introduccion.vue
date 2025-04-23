<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    .row.bg-c1.mb-4
      .col-12
        .px-5
          .bloque-texto-a.color-primario.p-4.p-md-5.mb-4(data-aos="fade-down")
            .row.m-0.align-items-center.justify-content-between
              .col-lg-8.order-2.order-lg-1
                .bloque-texto-a__texto.px-4.py-5
                  p.mb-0 Los estados financieros de propósito general reflejan la situación financiera y el desempeño de la empresa en un periodo determinado, además de los flujos de efectivo; dichos estados son una herramienta administrativa que contribuye a la adecuada toma de decisiones.
              .col-lg-4.mb-4.mb-lg-0.order-1.order-lg-2
                figure
                  img(src='@/assets/curso/intro/img1.svg', alt='', style="width: 400px").m-auto
          .row.mb-4
            .col-lg-auto.mb-4.mb-lg-0(data-aos="fade-right")
              figure
                img(src='@/assets/curso/intro/img2.svg', alt='', style="width: 440px").m-auto
            .col-lg(data-aos="fade-left")
              .p-4.bg-c2
                p Cabe resaltar que los elementos de los estados financieros son: activo, pasivo, patrimonio, ingresos y gastos. El conjunto de estos se encuentra integrado por:
                ul.lista-ul--color.mb-0
                  li.d-flex
                    i.fas.fa-circle-check(style="color: #5B39A6")
                    |
                    p.mb-0 Estado de situación financiera.
                  li.d-flex
                    i.fas.fa-circle-check(style="color: #5B39A6")
                    |
                    p.mb-0 Estado de resultados integral.
                  li.d-flex
                    i.fas.fa-circle-check(style="color: #5B39A6")
                    |
                    p.mb-0 Estado de cambio en el patrimonio.
                  li.d-flex
                    i.fas.fa-circle-check(style="color: #5B39A6")
                    |
                    p.mb-0 Estado de flujos de efectivo.
                  li.d-flex
                    i.fas.fa-circle-check(style="color: #5B39A6")
                    |
                    p.mb-0 Notas a los estados financieros.
          .row.mb-5
            .col-lg-8.mb-4.mb-lg-0(data-aos="fade-right")
              p Los estados financieros se deben presentar por lo menos una vez al año, y en caso de requerirse en periodos intermedios, es importante informar el periodo en el cual se está desarrollando. Al respecto, y de acuerdo con el Consejo Técnico de la Contaduría Pública - CTCP - (2020) en la NIC 1:
              .bloque-texto-b.color-primario.p-4
                .bloque-texto-b__texto
                  i.fas.fa-quote-left
                  p.mb-0 Una entidad presentará, como mínimo, dos estados de situación financiera, dos estados del resultado y otro resultado integral del periodo, dos estados del resultado del periodo separados (si los presenta), dos estados de flujos de efectivo y dos estados de cambios en el patrimonio, y notas relacionadas (p. 7).
                  i.fas.fa-quote-right
            .col-lg-4(data-aos="fade-left")
              figure
                img(src='@/assets/curso/intro/img2.png', alt='', style="width: 430px").m-auto
          .row.mb-4(data-aos="fade-right")
            .col-auto
              .px-3.py-2.bg-c3
                p.mb-0 #[b Características]
          p.mb-4(data-aos="fade-down") Para la elaboración y presentación de los estados financieros es importante tener en cuenta las siguientes características.
          .row.align-items-center
            .col-lg-5.mb-4.mb-lg-0(data-aos="fade-right")
              figure
                img(src='@/assets/curso/intro/img3.svg', alt='', style="width: 400px").m-auto
            .col-lg-7(data-aos="fade-left")
              AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta--azul2")
                .row(titulo="Presentación razonable")
                  .col-12
                    p.mb-0 Es la presentación fidedigna de los estados financieros, teniendo en cuenta los criterios establecidos en las NIIF.
                .row(titulo="Negocio en marcha")
                  .col-12
                    p.mb-0 Indica que la empresa debe tener continuidad en el tiempo y, por ende, la contabilidad debe reflejar el flujo de sus operaciones.
                .row(titulo="Base de acumulación")
                  .col-12
                    p.mb-0 Hace referencia al reconocimiento de los hechos económicos, los cuales se realizan en el momento que suceden.
                .row(titulo="Importancia relativa")
                  .col-12
                    p.mb-0 También denominada materialidad, hace énfasis en el reconocimiento, o no, de un hecho económico. Puede tener un efecto significativo en el proceso contable y en la toma de decisiones.
                .row(titulo="Compensación")
                  .col-12
                    p.mb-0 Una entidad no compensará activos con pasivos o ingresos con gastos a menos que así lo requiera o permita una NIIF.
                .row(titulo="Información comparativa")
                  .col-12
                    p.mb-0 Se realiza el análisis con respecto al periodo anterior. Debe incluir tanto datos cuantitativos como información cualitativa.
                .row(titulo="Uniformidad")
                  .col-12
                    p.mb-0 Hace referencia a la aplicación de normas, políticas y principios en el reconocimiento de hechos económicos.
    p.mb-5(data-aos="fade-down") La Norma Internacional de Contabilidad (NIC) 1 Presentación de Estados Financieros (CTCP, 2020), indica lo siguiente:
    .row.mb-4(data-aos="fade-right")
      .col-auto
        .px-3.py-2.bg-c3
          p.mb-0 #[b Objetivo]
    .row.mb-5
      .col-lg-9.order-2.order-lg-1(data-aos="fade-right")
        .row.h-100.align-items-center.bg-c2
          .col-12
            .p-4
              p.mb-0 Esta norma establece las bases de la presentación de los estados financieros de propósito general, para asegurar que los mismos sean comparables, tanto con los estados financieros de la misma entidad correspondientes a periodos anteriores, como con los de otras entidades. Se establecen requerimientos generales con miras a la presentación de los estados financieros, guías para determinar su estructura y requisitos mínimos sobre su contenido.
      .col-lg-3.order-1.order-lg-2.mb-4.mb-lg-0(data-aos="fade-left")
        figure
          img(src='@/assets/curso/intro/img4.svg', alt='', style="width: 400px").m-auto
    .row.mb-4(data-aos="fade-right")
      .col-auto
        .px-3.py-2.bg-c3
          p.mb-0 #[b Alcance]
    .row.mb-4
      .col-lg-9.order-2.order-lg-1(data-aos="fade-right")
        p Una entidad aplicará esta norma al preparar y presentar estados financieros de propósito de información general conforme a las Normas Internacionales de Información Financiera (NIIF).
        .row.bg-c2
          .col-12
            .p-4
              p.mb-0 Es de anotar que en otras NIIF se establecen los requerimientos de reconocimiento, medición e información a revelar para transacciones y otros sucesos.
      .col-lg-3.order-1.order-lg-2.mb-4.mb-lg-0(data-aos="fade-left")
        figure
          img(src='@/assets/curso/intro/img5.svg', alt='', style="width: 400px").m-auto
    .row.bg-c4
      .col-12
        .px-5
          .row.mb-4
            .col-lg-4.mb-4.mb-lg-0(data-aos="fade-right")
              figure
                img(src='@/assets/curso/intro/img6.svg', alt='', style="width: 400px").m-auto
            .col-lg-8(data-aos="fade-left")
              p Esta norma no es pertinente para la estructura y contenido de los estados financieros intermedios condensados que se elaboren de acuerdo con la NIC 34 Información Financiera Intermedia; sin embargo, los párrafos 15 a 35 se aplicarán a estos estados financieros. Esta NIC 1 se usará de la misma forma en todas las entidades, incluyendo las que presentan estados financieros consolidados de acuerdo con la NIIF 10 Estados Financieros Consolidados y las que presentan estados financieros separados, de acuerdo con la NIC 27 Estados Financieros Separados.
              p.mb-0 Además, dicha norma utiliza terminología propia de las entidades con ánimo de lucro, incluyendo las pertenecientes al sector público. Si las entidades con actividades sin fines de lucro del sector privado o del sector público aplican esta, podrían verse obligadas a modificar las descripciones utilizadas para partidas específicas de los estados financieros, e incluso para éstos.
          .row.mb-4
            .col-lg-8.order-2.order-lg-1(data-aos="fade-right")
              p Esta norma no es pertinente para la estructura y contenido de los estados financieros intermedios condensados que se elaboren de acuerdo con la NIC 34 Información Financiera Intermedia; sin embargo, los párrafos 15 a 35 se aplicarán a estos estados financieros. Esta NIC 1 se usará de la misma forma en todas las entidades, incluyendo las que presentan estados financieros consolidados de acuerdo con la NIIF 10 Estados Financieros Consolidados y las que presentan estados financieros separados, de acuerdo con la NIC 27 Estados Financieros Separados.
              p.mb-0 Además, dicha norma utiliza terminología propia de las entidades con ánimo de lucro, incluyendo las pertenecientes al sector público. Si las entidades con actividades sin fines de lucro del sector privado o del sector público aplican esta, podrían verse obligadas a modificar las descripciones utilizadas para partidas específicas de los estados financieros, e incluso para éstos.
            .col-lg-4.order-1.order-lg-2.mb-4.mb-lg-0(data-aos="fade-left")
              figure
                img(src='@/assets/curso/intro/img7.svg', alt='', style="width: 400px").m-auto
          .row.mb-5
            .col-12
              .p-4.bg-c2(data-aos="fade-right")
                p.mb-0 #[b Nota aclaratoria:] las tablas que se toman como referencia en los ejemplos en cada uno de los temas desarrollados, elaboradas mediante el programa Excel, son derivadas de los mismos, por lo tanto, no se numeran y la elaboración es propia, salvo donde se indique lo contrario.

</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
