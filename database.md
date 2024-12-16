# PostgreSQL Setup and Database Import Documentation

This documentation explains how to create a PostgreSQL user named `darbAdmin`, a database named `stagingdatabase`, and import a `.sql` file into the database on your local machine.

---

## **Step 1: Install PostgreSQL**
If PostgreSQL is not installed on your machine, install it using the following steps:

### **Ubuntu**:
```bash
sudo apt update
sudo apt install postgresql postgresql-client
```

### **Windows**:
Download and install PostgreSQL from [https://www.postgresql.org/download/](https://www.postgresql.org/download/).

---

## **Step 2: Start the PostgreSQL Service**
Ensure the PostgreSQL service is running:

### **Ubuntu**:
```bash
sudo systemctl start postgresql
sudo systemctl enable postgresql
```

### **Windows**:
Start the PostgreSQL service from the Services Manager or via the PostgreSQL application.

---

## **Step 3: Create a User and Database**
1. Log in to the PostgreSQL prompt:
   ```bash
   sudo -u postgres psql
   ```
   (On Windows, use the `psql` command-line tool.)

2. Create the `darbAdmin` user:
   ```sql
   CREATE USER darbAdmin WITH PASSWORD 'your_secure_password';
   ```

3. Create the `stagingdatabase` database:
   ```sql
   CREATE DATABASE stagingdatabase;
   ```

4. Grant privileges to `darbAdmin` on the `stagingdatabase` database:
   ```sql
   GRANT ALL PRIVILEGES ON DATABASE stagingdatabase TO darbAdmin;
   ```

5. Exit the PostgreSQL prompt:
   ```sql
   \q
   ```

---

## **Step 4: Import the `.sql` File**
To import the `.sql` file into the `stagingdatabase` database:

1. Ensure the `.sql` file is accessible on your local machine.
   Example: The file is located at `/path/to/file.sql`.

2. Use the following command to import the file:
   ```bash
   psql -U darbAdmin -d stagingdatabase -h localhost -p 5432 -f /path/to/file.sql
   ```
   - Replace `/path/to/file.sql` with the full path to your `.sql` file.
   - Use the password for `darbAdmin` when prompted.

---

## **Step 5: Verify the Import**
1. Log in to the `stagingdatabase`:
   ```bash
   psql -U darbAdmin -d stagingdatabase -h localhost -p 5432
   ```

2. List the tables to verify the import:
   ```sql
   \dt
   ```
   This command lists all the tables in the database.

3. Exit the PostgreSQL prompt:
   ```sql
   \q
   ```

---

## **Notes**
- **Security**: Always use a strong password for the `darbAdmin` user.
- Ensure the `.sql` file is properly formatted and does not contain syntax errors before importing.
- If you encounter permission issues, check the PostgreSQL service and user permissions.

Let me know if you have further questions!

