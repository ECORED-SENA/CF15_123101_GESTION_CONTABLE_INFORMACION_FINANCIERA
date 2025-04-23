export default {
  global: {
    Name: 'Estados financieros de propósito general',
    Description:
      'Se desarrollarán las bases para la presentación de los estados financieros de propósito general, bajo las NIIF. Los estados financieros son el resultado de las transacciones realizadas por la empresa en un periodo determinado, los cuales se encuentran integrados por: estado de situación financiera, estado de resultados, estado de cambio en el patrimonio, estado de flujos de efectivo y notas a los estados financieros.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-principal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.svg'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.svg'),
      },
      {
        clases: ['banner-principal-decorativo-3'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-3.svg'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: 'Estado de resultados integral',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Identificación',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo: 'Periodo contable sobre el que se informa',
            hash: 't_1_2',
          },
          {
            numero: '1.3',
            titulo: 'Principio del ente en marcha',
            hash: 't_1_3',
          },
          {
            numero: '1.4',
            titulo: 'Aspectos generales',
            hash: 't_1_4',
          },
          {
            numero: '1.5',
            titulo: 'Cuentas Otro Resultado Integral (ORI)',
            hash: 't_1_5',
          },
          {
            numero: '1.6',
            titulo: 'Estructura',
            hash: 't_1_6',
          },
          {
            numero: '1.7',
            titulo: 'Forma de presentación',
            hash: 't_1_7',
          },
          {
            numero: '1.8',
            titulo: 'Información a revelar ',
            hash: 't_1_8',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Estado de situación financiera',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo: 'Identificación',
            hash: 't_2_1',
          },
          {
            numero: '2.2',
            titulo: 'Período contable sobre el que se informa',
            hash: 't_2_2',
          },
          {
            numero: '2.3',
            titulo: 'Principio del ente en marcha',
            hash: 't_2_3',
          },
          {
            numero: '2.4',
            titulo: 'Distinción entre corriente y no corriente',
            hash: 't_2_4',
          },
          {
            numero: '2.5',
            titulo: 'Cuentas del Estado de situación financiera',
            hash: 't_2_5',
          },
          {
            numero: '2.6',
            titulo: 'Estructura',
            hash: 't_2_6',
          },
          {
            numero: '2.7',
            titulo: 'Forma de presentación',
            hash: 't_2_7',
          },
          {
            numero: '2.8',
            titulo: 'Información a revelar',
            hash: 't_2_8',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Estado de cambios en el patrimonio',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '3.1',
            titulo: 'Identificación',
            hash: 't_3_1',
          },
          {
            numero: '3.2',
            titulo: 'Período contable sobre el que se informa',
            hash: 't_3_2',
          },
          {
            numero: '3.3',
            titulo: 'Principio del ente en marcha',
            hash: 't_3_3',
          },
          {
            numero: '3.4',
            titulo: 'Estructura',
            hash: 't_3_4',
          },
          {
            numero: '3.5',
            titulo: 'Información a revelar',
            hash: 't_3_5',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        numero: '4',
        titulo: 'Estado de flujos de efectivo',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '4.1',
            titulo: 'Identificación',
            hash: 't_4_1',
          },
          {
            numero: '4.2',
            titulo: 'Período contable sobre el que se informa',
            hash: 't_4_2',
          },
          {
            numero: '4.3',
            titulo: 'Elementos para elaborar el flujo de efectivo',
            hash: 't_4_3',
          },
          {
            numero: '4.4',
            titulo: 'Métodos de presentación',
            hash: 't_4_4',
          },
          {
            numero: '4.5',
            titulo: 'Estructura',
            hash: 't_4_5',
          },
        ],
      },
      {
        nombreRuta: 'tema5',
        numero: '5',
        titulo: 'Notas y revelaciones',
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/dist.pdf',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      tema: '',
      referencia: '',
      tipo: 'Sitio web',
      link: '',
    },
  ],
  glosario: [
    {
      termino: 'Término',
      significado: 'Definición',
    },
  ],
  referencias: [
    {
      referencia: '',
      link: '',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Nombre completo',
          cargo: 'Responsable del ecosistema',
          centro: 'Dirección General',
        },
        {
          nombre: 'Nombre completo',
          cargo: 'Responsable de línea de producción',
          centro: 'Centro XYZ - Regional XYZ',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Nombre responsable',
          cargo: 'Nombre del rol',
          centro: 'Centro XYZ - Regional XYZ',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Nombre responsable',
          cargo: 'Diseñador de contenidos',
          centro: 'Centro XYZ - Regional XYZ',
        },
        {
          nombre: 'Nombre responsable',
          cargo: 'Desarrollador <i>full stack</i>',
          centro: 'Centro XYZ - Regional XYZ',
        },
        {
          nombre: 'Nombre responsable',
          cargo: 'Animador y productor audiovisual',
          centro: 'Centro XYZ - Regional XYZ',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Nombre responsable',
          cargo: 'Validador y vinculador de recursos educativos digitales',
          centro: 'Centro XYZ - Regional XYZ',
        },
        {
          nombre: 'Nombre responsable',
          cargo: 'Evaluador de contenidos inclusivos y accesibles',
          centro: 'Centro XYZ - Regional XYZ',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
}
