export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '625efc2c2a61a307f7ef9df1',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-studio-s6ekf27e',
                  apiId: '1df5b31b-0612-409b-8c03-0562d04ae457'
                },
                {
                  buildHookId: '625efc2da6cf21069c24a132',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-web-1w9mgfiw',
                  apiId: '53c8b305-ac0d-4b09-aea9-e5c3df37cb90'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/rawatamit005/sanity-gatsby-portfolio',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-portfolio-web-1w9mgfiw.netlify.app',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['sampleProject']},
      layout: {width: 'medium'}
    }
  ]
}
