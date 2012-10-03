Suri-Bootstrap
==============

Maven
-----

### Repository

	<repository>
		<id>suri-boostrap</id>
		<name>Suri-Bootstrap</name>
		<url>https://github.com/Suricattus/suri-bootstrap/raw/master/repo</url>
	</repository>
	
### Dependency

	<dependency>
		<groupId>br.com.suricattus</groupId>
		<artifactId>suri-bootstrap</artifactId>
		<version>1.2</version>
		<scope>compile</scope>
	</dependency>
	

Usage
-----

### Web.xml

	<context-param>
		<param-name>primefaces.THEME</param-name>
		<param-value>bootstrap</param-value>
	</context-param>

### Namespace

	xmlns:sb="http://www.suricattus.com.br/bootstrap/ui"
	
### Head

	<h:head>
		
		<sb:head responsive="true"/>
		
		...OTHER STYLESHEETS...
		
	</h:head>