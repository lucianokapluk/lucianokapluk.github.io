// pages/assetlinks.json.js

export default () => {
  // Define the content of your assetlinks.json file
  const assetlinksContent = {
    [{
  "relation": ["delegate_permission/common.handle_all_urls"],
  "target": {
    "namespace": "android_app",
    "package_name": "com.vectormgt.app",
    "sha256_cert_fingerprints":
    ["5d:95:a2:b8:15:a1:0a:0b:ab:5c:24:f8:bc:58:e8:f8:b8:42:cb:05:83:ce:67:f2:93:43:cc:9a:13:fa:db:7f",
      "22:05:9b:21:3e:ee:ae:36:3c:46:28:08:b4:02:30:f5:c4:90:21:39:c2:44:f0:6b:65:d9:67:c8:00:cc:9f:b1",
      "6a:e2:a2:7e:64:6d:83:63:97:cf:f2:16:be:e3:77:26:5d:aa:ba:8d:41:64:e0:e3:b5:70:20:f8:1e:f1:8d:7c"
    
    ]
  }
}]
  };

  return {
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(assetlinksContent),
  };
};

