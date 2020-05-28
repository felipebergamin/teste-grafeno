import React from 'react';
import Table from 'react-bootstrap/Table';
import { useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';

import api from '~/services/api';
import Paginator from '~/components/Paginator';

const PAGE_SIZE = 20;

const Home = ({ location }) => {
  const [total, setTotal] = React.useState(0);
  const [list, setList] = React.useState([]);
  const history = useHistory();

  const currentPage = React.useMemo(() => {
    const query = new URLSearchParams(location.search);
    return query.has('page') ? Number(query.get('page')) : 1;
  }, [location]);

  const totalPages = React.useMemo(() => Math.floor(total / PAGE_SIZE) + 1, [
    total,
  ]);

  async function loadPokemons() {
    const limit = PAGE_SIZE;
    const offset = PAGE_SIZE * (currentPage - 1);

    const {
      data: { results, count },
    } = await api.get('pokemon', {
      params: {
        limit,
        offset,
      },
    });

    setList(results);
    setTotal(count);
  }

  React.useEffect(() => {
    loadPokemons();
  }, [location]);

  const changeToPage = (toIndex) => {
    return history.push(`/?page=${toIndex}`);
  };

  return (
    <>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Nome do Pokemon</th>
            <th>Link</th>
          </tr>
        </thead>
        <tbody>
          {list.map(({ name, url }) => (
            <tr key={name}>
              <td>{name}</td>
              <td>{url}</td>
            </tr>
          ))}
        </tbody>
      </Table>

      <Paginator
        currentPage={currentPage}
        totalPages={totalPages}
        onChangePage={changeToPage}
      />
    </>
  );
};

Home.propTypes = {
  location: PropTypes.shape({
    search: PropTypes.string,
  }).isRequired,
};

export default React.memo(Home);
