1. Create a new directory

```dotnetcli
mkdir <directory-name>
```

2. init the lerna

```dotnetcli
lerna init
```

3. create a packages for all the subpackages

```
lerna create @xe/ui-lib --yes
lerna create @xe/ui-lib-button --yes
lerna create @xe/ui-lib-input --yes
```
