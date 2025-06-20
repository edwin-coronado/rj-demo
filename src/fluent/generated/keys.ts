import "@servicenow/sdk/global";

declare global {
    namespace Now {
        namespace Internal {
            interface Keys extends KeysRegistry {
                explicit: {
                        "cs0": {
                            "table": "sys_script_client",
                            "id": "a3c651e0fbea4ba09cefddb5e3281d88"
                        },
                        "src_server_script_ts": {
                            "table": "sys_module",
                            "id": "5a50527cd9194120b45988e5cf5447cb"
                        },
                        "br0": {
                            "table": "sys_script",
                            "id": "53557ebde47a4d8980b3b157c9d729bc"
                        },
                        "package_json": {
                            "table": "sys_module",
                            "id": "f65940c2278f4baea08f6f30bd190537"
                        }
                    };
            }
        }
    }
}
