---
marp: true
---

# situacao_atual:

em FirstNamePerson :: textoMin e Max funcionando ok

#proximos_passos: fazer tests TDD :: no validators

---

# TestOK

mensagens_de_erro_tamanho_de_texto_min_e_max_aceitos:
[vindos dinamicos do arquivo setObjectValues em](../setup/dynamicCentral/setObjectValues.ts)

---

subir_tag_release: docs: [tagging] publicando [ objectValuesFN: FirstNamePerson
] para versao 1.0.0_objectsValueFN neste commit.

codigo_subindo_tag_local: git tag -a "v1.0.0_objectsValueFN" -m "version
v1.0.0_objectsValueFN" 24eb4a0ddc6fd2b3334efb93fc3f0e1d514baad6

confimar_remoto_pushar_a_tag: git push origin release_objectValuesFN --follow-tags

conferir_se_subiu: git tag
