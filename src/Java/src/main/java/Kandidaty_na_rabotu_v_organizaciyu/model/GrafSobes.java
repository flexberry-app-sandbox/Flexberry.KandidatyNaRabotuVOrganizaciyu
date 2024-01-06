package Kandidaty_na_rabotu_v_organizaciyu.model;

import org.eclipse.persistence.annotations.Convert;
import org.eclipse.persistence.annotations.Converter;
import Kandidaty_na_rabotu_v_organizaciyu.utils.UUIDConverter;

import javax.persistence.*;
import java.util.UUID;

import java.util.List;

/**
 * Entity implementation class for Entity: ГрафСобес
 */
@Entity(name = "IISKandidaty_na_rabotu_v_organizaciyuГрафСобес")
@Table(schema = "public", name = "ГрафСобес")
public class GrafSobes {

    @Id
    @Converter(converterClass = UUIDConverter.class, name = "primarykey")
    @Convert("primarykey")
    @Column(name = "primarykey", length = 16, unique = true, nullable = false)
    private UUID primarykey;

    @OneToMany(mappedBy = "grafsobes", fetch = FetchType.LAZY, cascade = CascadeType.REMOVE)
    private List<TCHGrafSobes> tchgrafsobess;


    public GrafSobes() {
        super();
    }

    public void setPrimarykey(UUID primarykey) {
        this.primarykey = primarykey;
    }

    public UUID getPrimarykey() {
        return primarykey;
    }


}