import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink, Flex, Heading
} from '@chakra-ui/react';
import React from 'react';
import AddModalSite from './AddModalSite';

const SiteTableHeader = () => {
    return (
        <>
        <Breadcrumb>
          <BreadcrumbItem>
            <BreadcrumbLink>Sites</BreadcrumbLink>
          </BreadcrumbItem>
        </Breadcrumb>
        <Flex justifyContent="space-between">
          <Heading mb={8}>My Sites</Heading>
          <AddModalSite>+ Add Site</AddModalSite>
        </Flex>
      </>
    )
}

export default SiteTableHeader
