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
		<version>1.1</version>
		<scope>compile</scope>
	</dependency>
	

Usage
-----

<<<<<<< HEAD
### Web.xml

	<context-param>
		<param-name>primefaces.THEME</param-name>
		<param-value>bootstrap</param-value>
	</context-param>

=======
>>>>>>> 78b6a24bd33d128eb2708e2a792d3dd169a45c31
### Namespace

	xmlns:sb="http://www.suricattus.com.br/bootstrap/ui"
	
### Head

	<h:head>
		
		<sb:head responsive="true"/>
		
		...OTHER STYLESHEETS...
		
	</h:head>