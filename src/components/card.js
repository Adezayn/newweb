import React from 'react';
import {Row, Col, Card, CardTitle, Icon} from 'react-materialize';
import './mystyle.css';

const customCard = () => {
    return (
<div>
  <div><h2 class="my-skills">MY SKILLS</h2></div>
<Row>


  <Col
    m={2}
    s={12}
  >
    <Card
      actions={[
        <a key="1" href="/">.</a>
      ]}
      closeIcon={<Icon>close</Icon>}
      header={<CardTitle image="/HTML 5.png" ></CardTitle>}
      revealIcon={<Icon>more_vert</Icon>}
    > <b>HTML 5</b>
    </Card>
  </Col>

  <Col
    m={2}
    s={12}
  >
    <Card
      actions={[
        <a key="1" href="/">.</a>
      ]}
      closeIcon={<Icon>close</Icon>}
      header={<CardTitle image="/CSS 3.png"></CardTitle>}
      revealIcon={<Icon>more_vert</Icon>}
    >
      <b>CSS 3</b>
    </Card>
  </Col>

  <Col
    m={2}
    s={12}
  >
    <Card
      actions={[
        <a key="1" href="/">.</a>
      ]}
      closeIcon={<Icon>close</Icon>}
      header={<CardTitle image="/JS.png"></CardTitle>}
      revealIcon={<Icon>more_vert</Icon>}
    ><b>JavaScript</b>
    </Card>
  </Col>

  <Col
    m={2}
    s={12}
  >
    <Card
      actions={[
        <a key="1" href="/">.</a>
      ]}
      closeIcon={<Icon>close</Icon>}
      header={<CardTitle image="/React.png"></CardTitle>}
      revealIcon={<Icon>more_vert</Icon>}
    >React
    </Card>
  </Col>

  <Col
    m={2}
    s={12}
  >
    <Card
      actions={[
        <a key="1" href="/">.</a>
      ]}
      closeIcon={<Icon>close</Icon>}
      header={<CardTitle image="/bootstrap.png"></CardTitle>}
      revealIcon={<Icon>more_vert</Icon>}
    >
  <b>Bootstrap</b>
    </Card>
  </Col>

  <Col
    m={2}
    s={12}
  >
    <Card
      actions={[
        <a key="1" href="/">.</a>
      ]}
      closeIcon={<Icon>close</Icon>}
      header={<CardTitle image="/materilaize.png"></CardTitle>}
      revealIcon={<Icon>more_vert</Icon>}
    >
    <b>Materialize</b>
    </Card>
  </Col>
</Row>
</div>
    )
    }
    export default customCard;