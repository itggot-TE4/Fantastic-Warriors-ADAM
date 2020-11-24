class DBhandler

    def self.connect
    
        @db ||= SQLite3::Database.new('db/db.db')
        @db.results_as_hash = true
        @db
        
    end

    def self.run_test

        # methods to test go here

    end

    def self.update(table, columns, values, condition, criteria)

        if columns.is_a? Array
            columns = "'#{columns.join("', '")}'"
        end

        if values.is_a? Array
            values = "'#{values.join("', '")}'"
        end

        connect

        @db.execute("UPDATE #{table} SET (#{columns}) = (#{values}) WHERE #{condition} = ?", criteria)

    end

    def self.delete(table, criteria, condition)
        connect

        @db.execute("DELETE FROM #{table} WHERE #{condition} = ?", criteria)
    end

    def self.insert(table, columns, values) 
        connect

        @db.execute("INSERT INTO #{table} (#{columns}) VALUES (#{values})")
    end

    def self.get_last(table, columns)

        connect

        self.get("ORDER BY ID DESC LIMIT 1", table, columns)

    end

    def self.get(table,columns)

        connect

        @db.execute("SELECT #{columns} FROM #{table} #{where}")

    end

end