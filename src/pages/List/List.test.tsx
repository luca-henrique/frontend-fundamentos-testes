import React from 'react'
import { render, waitFor } from '@testing-library/react'
import axios from 'axios'

/* 

Outra biblioteca? axios-mock-adapter? Sim, ela é utilizada para facilitar a criação de mocks com o axios, caso esteja utilizando fetch existe esse pacote e muitos outros. Onde trabalho utilizamos GraphQL com a biblioteca Apollo Client e a própria biblioteca fornece uma forma de mockar as chamadas.

*/
import MockAdapter from 'axios-mock-adapter'

import { List } from './List'

const apiMock = new MockAdapter(axios)

const mocksRepos = [
  {
    id: 1,
    name: 'Repo01',
    description: 'Description01',
    url: 'about:blank',
    stargazers_count: '1',
    forks: '2',
    open_issues: '3',
  },
  {
    id: 2,
    name: 'Repo02',
    description: 'Description02',
    url: 'about:blank',
    stargazers_count: '4',
    forks: '5',
    open_issues: '6',
  },
]

/*

Nesse teste é mockada novamente a biblioteca react-router-dom, mas dessa vez o que é utilizado na página é o hook useLocation e o componente Link. Novamente o hook é uma função e dela eu quero que venha o state que seria enviado pela página Home. O componente Link utiliza o children como o texto ou elemento que é exibido, então crio uma função que retorna somente esse texto, sem implementação.

*/

jest.mock('react-router-dom', () => {
  return {
    useLocation: () => ({
      pathname: '/list',
      state: { name: 'azagatti' },
    }),
    Link: ({ children }: { children: React.ReactNode }) => children,
  }
})

describe('List', () => {
  it('should load repos', async () => {
    apiMock
      .onGet('https://api.github.com/users/azagatti/repos')
      .reply(200, mocksRepos)
    const { getByText } = render(<List />)

    await waitFor(() => {
      expect(getByText('Repo01')).toBeInTheDocument()
      expect(getByText('Repo02')).toBeInTheDocument()
    })
  })
})
