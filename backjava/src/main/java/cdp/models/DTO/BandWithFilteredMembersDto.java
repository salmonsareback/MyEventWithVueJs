package cdp.models.DTO;

import cdp.models.Band;

public class BandWithFilteredMembersDto extends Band {
    private Integer nbOfMembers;

    public BandWithFilteredMembersDto(Long id, String name, Integer nbOfMembers) {
        super(id,name);
        this.nbOfMembers = nbOfMembers;
    }

    public Integer getNbOfMembers() {
        return nbOfMembers;
    }

    public void setNbOfMembers(Integer nbOfMembers) {
        this.nbOfMembers = nbOfMembers;
    }
}
