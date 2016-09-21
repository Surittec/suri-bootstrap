package br.com.surittec.suribootstrap.util.resource;

import javax.faces.application.Resource;
import javax.faces.application.ResourceHandler;
import javax.faces.application.ResourceHandlerWrapper;

public class SurifacesResourceHandler extends ResourceHandlerWrapper {
    
    private static final String LIBRARY = "suribootstrap";
	private final ResourceHandler wrapped;
    
    public SurifacesResourceHandler(ResourceHandler wrapped) {
        this.wrapped = wrapped;
    }

    @Override
    public ResourceHandler getWrapped() {
        return this.wrapped;
    }

    @Override
    public Resource createResource(String resourceName, String libraryName) {
        Resource resource = super.createResource(resourceName, libraryName);
        
        if(resource != null && libraryName != null && libraryName.equalsIgnoreCase(LIBRARY)) {
            return new SurifacesResource(resource);
        }
        return resource;
    }

    @Override
    public Resource createResource(String resourceName, String libraryName, String contentType) {
        Resource resource = super.createResource(resourceName, libraryName, contentType);
        
        if(resource != null && libraryName != null && libraryName.equalsIgnoreCase(LIBRARY)) {
            return new SurifacesResource(resource);
        }
        return resource;
    }

}
