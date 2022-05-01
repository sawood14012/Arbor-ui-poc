import * as React from 'react';
import { PageSection, Title } from '@patternfly/react-core';
import { QrReader } from 'react-qr-reader';
import { useState } from 'react';

const Dashboard: React.FunctionComponent = () => {
  const [data, setData] = useState('No result');
  return (<PageSection>
    <Title headingLevel="h1" size="lg">Scan QR!</Title>
    <QrReader
        onResult={(result, error) => {
          if (result) {
            setData(result?.text);
          }

          if (error) {
            console.info(error);
          }
        }}
        style={{ width: '100%' }}
      />
      <p>{data}</p>
  </PageSection>)
}

export { Dashboard };
