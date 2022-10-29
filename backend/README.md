## Steps to get the Backend up and running 

1. Create the Virtual Environment

    ```sh
    python3 -m venv venv
    ```

2. Activate the virtual Environment

    For Unix/Linux/Mac
    ```sh
    source venv/bin/activate
    ```

    For Windows
    ```sh
    source venv\Scripts\activate
    ```

3. Install the requirements

    ```sh
    pip install -r requirements.txt
    ```

4. CD Into the Library directory

    ```sh
    cd library
    ```
5. Run Migrate

    ```sh
    python manage.py migrate
    ```

6. Create SuperUser for the project

    ```sh
    python manage.py createsuperuser --email userEmail@gatech.edu --username admin
    ```

7. Enter Password 

8. Finally, run the server

    ```sh
    python manage.py runserver
    ```