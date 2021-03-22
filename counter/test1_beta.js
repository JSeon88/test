<?xml version="1.0" encoding="UTF-8"?>
<beans xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
       xmlns:util="http://www.springframework.org/schema/util"
       xmlns="http://www.springframework.org/schema/beans"
       xsi:schemaLocation="
			http://www.springframework.org/schema/beans http://www.springframework.org/schema/beans/spring-beans-4.3.xsd
			http://www.springframework.org/schema/util http://www.springframework.org/schema/util/spring-util-4.3.xsd">

    <util:map id="toastId">
        <entry key="serviceCode" value="govtoast"/>
        <entry key="sessionServerUrl" value="http://tcc1-alpha-gray-neoid-api.toastoven.net:5001/"/>
        <entry key="domainName" value="toast.com"/>
        <entry key="authenticationCookie" value="TCG_NEO3_SES"/>
        <entry key="checksumCookie" value="TCG_NEO3_CHK"/>
        <entry key="clientKeyPairs" value="sqTeq9ElzRbZhxwiJF2E/tYld0CXPMuVlxhnfqRRMrzyG"/>
        <entry key="skmDomain" value="api-keymanager.cloud.toast.com"/>
        <entry key="skmAppKey" value="PSsgRQ4VfXECQpA5"/>
        <entry key="skmAsymmetricSecretId" value="05fcb6a9c04f42958872bb6f58f17566"/>
        <entry key="skmSymmetricKeyId" value="1d7a68c05f5b4866b8e0d11cf7f076aa"/>
        <entry key="skmEncryptedSymmetricKey" value="+vv8/QAAAABFCmDcn3brSgoznGlydaXEZKY73eMXrqL3E3DCxk069U9giT/7X8mHaKUIPl0BYxlSLgkGDtl9HCF6m5cMq+s3s509n51j6/3W2fc/o0LzTT6bFUuS4jFq4h/9Y3ZeoLSqXtqhZ1JvldCsZdL3QOwEr6X96YLAfrGEVX7lRAgWh9Gd93fA7IiWHyHeyz8D6w0sY3JAbHsvZAleZ092e/8QY2awgvRiXNkIVUcHmRE2VymRF6c00mY6erMNgR/N9kY="/>
        <entry key="refreshDuration" value="0"/>
        <entry key="iamSessionServerUrl" value="http://beta-gov-iam.toast.com:8080"/>
        <entry key="iamSessionCookieName" value="TIAMSES.GOV"/>
        <entry key="iamSidCookieName" value="TIAMSID.GOV-beta"/>
        <entry key="iamOrgDomainHeaderName" value="X-TC-ORG-DOMAIN"/>
        <entry key="clientIpHeaderName" value="X-Real-IP"/>
    </util:map>

    <util:map id="rest_api_domains">
        <entry key="cab" value="https://beta-gov-cab.toast.com" />
        <entry key="billing-batch" value="https://beta-gov-billing-batch.toast.com" />
        <entry key="billing-meter" value="https://beta-gov-billing-meter.toast.com" />
        <entry key="csbbs" value="http://toastchannel.cloud.toast.com" />
        <entry key="i18n" value="https://beta-gov-i18n.toast.com" />
    </util:map>

    <util:map id="rest_api">
      <entry key="hmac" value="" />
    </util:map>

    <util:map id="rest_api">
        <entry key="hmac" value="" />
    </util:map>

    <util:map id="cab">
        <entry key="uuid" value="b3512770-1ecc-11e5-85f7-000000003149" />
    </util:map>

    <util:map id="tca">
        <entry key="roleAppkey" value="YzF6pyV7bJLIb9cY"/>
        <entry key="roleSecretkey" value="Lf5DkbD6"/>
    </util:map>

    <util:map id="domain">
        <entry key="console" value="https://beta-gov-console.toast.com" />
        <entry key="id" value="https://beta-gov-id.toast.com" />
        <entry key="iamConsole" value="https://%s.beta-gov-console.toast.com" />
        <entry key="iamId" value="https://beta-gov-iam.toast.com" />
    </util:map>

</beans>
