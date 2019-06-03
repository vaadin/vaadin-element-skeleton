# Creating a new Vaadin component

1. Clone this repo

        git clone git@github.com:vaadin/vaadin-element-skeleton.git new-element-name

2. When in the `new-element-name` folder, replace all `vaadin-element` and `VaadinElement` occurrences with your new element name.

        perl -pi -e 's,vaadin-element,new-element-name,g' *.* demo/* test/* src/* theme/*/*
        perl -pi -e 's,VaadinElement,NewVaadinElementName,g' *.* demo/* test/* src/* theme/*/*

3. Rename the element

        mv vaadin-element.js new-element-name.js
        mv src/vaadin-element.js src/new-element-name.js
        mv theme/lumo/vaadin-element.js theme/lumo/new-element-name.js
        mv theme/material/vaadin-element.js theme/material/new-element-name.js

4. Check that everything works all right

        npm install
        npm start

  And check that everything works:

  - http://localhost:3000/components/@vaadin/new-element-name/
  - http://localhost:3000/components/@vaadin/new-element-name/demo/

5. Remove this README file since it is not needed any more.

        rm README_CREATE_NEW.md

5. Finally, initialize git so as we have an empty history for our `<new-element-name>`

        rm -rf .git
        git init
        git add * .??*
        git commit -m 'First Commit' -a

