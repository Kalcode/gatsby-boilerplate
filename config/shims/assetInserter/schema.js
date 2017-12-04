import React from 'react'
import config from 'config'

export default function Schema(props) {
  return (
    <script
      key='schema-script'
      type='application/ld+json'
      dangerouslySetInnerHTML={{__html: JSON.stringify({
        '@context': 'http://schema.org',
        '@type': 'Organization',
        'address': {
          '@type': 'PostalAddress',
          'addressLocality': config.address.city,
          'addressRegion': config.address.state,
          'postalCode': config.address.zipcode,
          'streetAddress': config.address.street,
          'addressCountry': config.address.country,
          'areaServed': config.address.area,
          'telephone': config.phone,
        },
        'email': config.email,
        'logo': config.logo,
        'name': config.name,
        'legalName': config.legal_name,
        'url': config.url,
      })}}
    />
  )
}
