export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-blog'
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
                  buildHookId: '5dcda40f99c7f0f13a61d890',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-caae6ak4',
                  apiId: '24a3cc52-5280-4e21-9cf8-fa7259a84fbc'
                },
                {
                  buildHookId: '5dcda4108323972d0e2393e6',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-dz3isr5j',
                  apiId: '03853e6c-35db-4b8e-88b8-a26b951f7daf'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/dalcrose/sanity-gatsby-blog',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-gatsby-blog-web-dz3isr5j.netlify.com', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
