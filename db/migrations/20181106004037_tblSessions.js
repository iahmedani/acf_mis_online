
exports.up = function(knex, Promise) {
  return knex.schema.raw(`CREATE TABLE [dbo].[tblSessions](
	[session_id] [int] IDENTITY(1,1) NOT NULL,
	[site_id] [int] NULL,
	[client_session_id] [int] NOT NULL,
	[client_id] [varchar](255) NOT NULL,
	[session_date] [date] NULL,
	[session_type] [varchar](255) NULL,
	[female_participants] [int] NULL,
	[session_location] [varchar](255) NULL,
	[upload_status] [int] NULL,
	[created_at] [datetime] NULL,
	[updated_at] [datetime] NULL,
	[username] [varchar](50) NULL,
	[org_name] [varchar](50) NULL,
	[project_name] [varchar](50) NULL,
	[male_participants] [int] NULL,
 CONSTRAINT [PK__tblSessi__69B13FDCD3FCE919] PRIMARY KEY CLUSTERED 
(
	[client_session_id] ASC,
	[client_id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 100) ON [PRIMARY]
) ON [PRIMARY]`)
};

exports.down = function(knex, Promise) {
  return knex.schema.raw(`DROP TABLE [dbo].[tblSessions]`)
};
